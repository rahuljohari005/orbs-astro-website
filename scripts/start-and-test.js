const { spawn } = require('child_process');
const { createServer } = require('http');
const { readFileSync, existsSync } = require('fs');
const { join } = require('path');

// Configuration
const BACKEND_DIR = process.env.BACKEND_DIR;
const BACKEND_PORT = parseInt(process.env.BACKEND_PORT) || 4000;
const SITE_PORT = parseInt(process.env.SITE_PORT) || 3000;
const KUNDALI_SAMPLE = process.env.KUNDALI_SAMPLE || JSON.stringify({
  name: "Test User",
  date_of_birth: "1990-01-01",
  time_of_birth: "12:00",
  place_of_birth: "Mumbai, India"
});

if (!BACKEND_DIR) {
  console.error('❌ BACKEND_DIR environment variable not set');
  process.exit(1);
}

console.log('🚀 Starting AI Integration Test Runner...');
console.log(`🔮 Backend: ${BACKEND_DIR} (port ${BACKEND_PORT})`);
console.log(`🌐 Website: port ${SITE_PORT}`);

// Helper: Wait for service to be ready
async function waitForService(url, description, maxAttempts = 30) {
  console.log(`⏳ Waiting for ${description}...`);
  
  for (let i = 0; i < maxAttempts; i++) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        console.log(`✅ ${description} ready!`);
        return true;
      }
    } catch (error) {
      // Ignore fetch errors during startup
    }
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    process.stdout.write('.');
  }
  
  console.log(`\n❌ ${description} failed to start after ${maxAttempts * 2} seconds`);
  return false;
}

// Helper: Spawn process and capture output
function spawnProcess(command, args, cwd, name) {
  console.log(`🚀 Starting ${name}...`);
  
  const child = spawn(command, args, {
    cwd,
    stdio: ['pipe', 'pipe', 'pipe'],
    shell: true
  });
  
  let stdout = '';
  let stderr = '';
  
  child.stdout.on('data', (data) => {
    const output = data.toString();
    stdout += output;
    process.stdout.write(`[${name}] ${output}`);
  });
  
  child.stderr.on('data', (data) => {
    const output = data.toString();
    stderr += output;
    process.stderr.write(`[${name}-ERR] ${output}`);
  });
  
  child.on('error', (error) => {
    console.error(`❌ Failed to start ${name}:`, error.message);
    process.exit(1);
  });
  
  return { child, stdout, stderr };
}

// Main execution
async function main() {
  try {
    // 1. Start backend
    const backend = spawnProcess('npm', ['run', 'dev'], BACKEND_DIR, 'Backend');
    
    // 2. Wait for backend
    const backendReady = await waitForService(
      `http://localhost:${BACKEND_PORT}/api/v1/health`,
      'AI Backend'
    );
    
    if (!backendReady) {
      console.error('\n❌ Backend failed to start');
      console.error('\n📋 Backend Output (last 50 lines):');
      console.error(backend.stdout.split('\n').slice(-50).join('\n'));
      console.error('\n📋 Backend Errors (last 50 lines):');
      console.error(backend.stderr.split('\n').slice(-50).join('\n'));
      process.exit(1);
    }
    
    // 3. Start website
    const website = spawnProcess('npm', ['run', 'dev'], process.cwd(), 'Website');
    
    // 4. Wait for website
    const websiteReady = await waitForService(
      `http://localhost:${SITE_PORT}`,
      'Website'
    );
    
    if (!websiteReady) {
      console.error('\n❌ Website failed to start');
      console.error('\n📋 Website Output (last 50 lines):');
      console.error(website.stdout.split('\n').slice(-50).join('\n'));
      console.error('\n📋 Website Errors (last 50 lines):');
      console.error(website.stderr.split('\n').slice(-50).join('\n'));
      process.exit(1);
    }
    
    // 5. Run integration tests
    console.log('\n🧪 Running Integration Tests...');
    
    // Test A: Kundali Proxy
    console.log('📊 Testing Kundali Proxy...');
    const kundaliResponse = await fetch(`http://localhost:${SITE_PORT}/api/proxy/kundali`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: KUNDALI_SAMPLE
    });
    
    if (!kundaliResponse.ok) {
      throw new Error(`Kundali proxy failed: ${kundaliResponse.status} ${kundaliResponse.statusText}`);
    }
    
    const kundaliData = await kundaliResponse.json();
    if (!kundaliData.success && !kundaliData.charts && !kundaliData.sessionId) {
      throw new Error('Kundali proxy returned invalid data structure');
    }
    
    console.log('✅ Kundali Proxy Test Passed');
    
    // Test B: Chat Proxy
    console.log('💬 Testing Chat Proxy...');
    const chatResponse = await fetch(`http://localhost:${SITE_PORT}/api/proxy/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: "Health check question" })
    });
    
    if (!chatResponse.ok) {
      throw new Error(`Chat proxy failed: ${chatResponse.status} ${chatResponse.statusText}`);
    }
    
    const chatData = await chatResponse.json();
    if (!chatData.reply && !chatData.message) {
      throw new Error('Chat proxy returned invalid data structure');
    }
    
    console.log('✅ Chat Proxy Test Passed');
    
    // Success!
    console.log('\n🎉 All Tests Passed!');
    console.log('✅ Local integration OK');
    console.log('\n📱 Both services are running:');
    console.log(`   Backend: http://localhost:${BACKEND_PORT}`);
    console.log(`   Website: http://localhost:${SITE_PORT}`);
    console.log('\n🔒 Keep this terminal open to maintain both services');
    
  } catch (error) {
    console.error('\n❌ Integration Test Failed:', error.message);
    process.exit(1);
  }
}

main();
