const puppeteer = require('puppeteer');
const readlineSync = require('readline-sync');

async function robo() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  const moedaBase = readlineSync.question('Informe uma moeda base: ') || 'dolar';
  const moedaFinal = readlineSync.question('Informe uma moeda desejada: ') || 'real';
  const anyUrl = `https://www.google.com/search?q=${moedaBase}+para+${moedaFinal}&rlz=1C5CHFA_enBR893BR893&oq=${moedaBase}+para+${moedaFinal}&aqs=chrome.0.0l8.2447j1j7&sourceid=chrome&ie=UTF-8`
  await page.goto(anyUrl);

  const result = await page.evaluate(() => {
    return valorMoedaFinal = document.querySelector('.a61j6.vk_gy.vk_sh.Hg3mWc').value;
  });

  console.log(`O valor de 1 ${moedaBase} em ${moedaFinal} equivale a ${result}`);
  await browser.close();
}

robo();