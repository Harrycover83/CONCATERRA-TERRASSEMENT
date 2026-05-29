/**
 * Script de compression des images CONCATERRA
 * Lecture depuis : public/images/chantiers/
 * Utilisation : node scripts/compress-images.js
 */

const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const INPUT_DIR = path.join(__dirname, '../public/images/chantiers');
const OUTPUT_DIR = INPUT_DIR; // on écrase en place (les originaux sont dans staging/)

const TASKS = [
  // Hero fullscreen — large + quality
  {
    input: 'hero-bg-raw.jpg',
    output: 'hero-bg.jpg',
    width: 1920,
    height: 1080,
    fit: 'cover',
    quality: 85,
  },
  // OG image — format 1200x630 strict
  {
    input: 'hero-bg-raw.jpg',
    output: 'og-image.jpg',
    width: 1200,
    height: 630,
    fit: 'cover',
    quality: 85,
  },
  // Réalisations — max 1200px wide
  ...['1','2','3','4','5','6','7'].map(n => ({
    input: `realisation-${n}-raw.jpg`,
    output: `realisation-${n}.jpg`,
    width: 1200,
    height: null,
    fit: 'inside',
    quality: 80,
  })),
];

async function processImage(task) {
  const inputPath = path.join(INPUT_DIR, task.input);
  const outputPath = path.join(OUTPUT_DIR, task.output);

  if (!fs.existsSync(inputPath)) {
    console.warn(`⚠️  Absent : ${task.input}`);
    return;
  }

  let pipeline = sharp(inputPath);

  if (task.height) {
    pipeline = pipeline.resize(task.width, task.height, { fit: task.fit, position: 'center' });
  } else {
    pipeline = pipeline.resize(task.width, null, { fit: task.fit, withoutEnlargement: true });
  }

  pipeline = pipeline.jpeg({ quality: task.quality, mozjpeg: true });

  await pipeline.toFile(outputPath);

  const inSize = (fs.statSync(inputPath).size / 1024).toFixed(0);
  const outSize = (fs.statSync(outputPath).size / 1024).toFixed(0);
  console.log(`✅ ${task.output.padEnd(22)} ${String(inSize).padStart(6)} KB → ${String(outSize).padStart(5)} KB`);
}

async function main() {
  console.log('\n📸 Compression images CONCATERRA\n');

  // Traitement logo PNG séparé (juste optimisation, pas de resize)
  const logoPath = path.join(__dirname, '../public/logo-raw.png');
  const logoOut = path.join(__dirname, '../public/logo.png');
  if (fs.existsSync(logoPath)) {
    await sharp(logoPath)
      .png({ compressionLevel: 9 })
      .toFile(logoOut);
    const inSize = (fs.statSync(logoPath).size / 1024).toFixed(0);
    const outSize = (fs.statSync(logoOut).size / 1024).toFixed(0);
    console.log(`✅ ${'logo.png'.padEnd(22)} ${String(inSize).padStart(6)} KB → ${String(outSize).padStart(5)} KB`);
  } else {
    console.warn('⚠️  Absent : logo-raw.png (placer dans public/)');
  }

  for (const task of TASKS) {
    await processImage(task);
  }

  console.log('\n✨ Terminé — vérifier les tailles dans public/images/chantiers/\n');
}

main().catch(console.error);
