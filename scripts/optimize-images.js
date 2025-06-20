import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, '../src/assets');
const outputDir = path.join(__dirname, '../src/assets/optimized');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

async function optimizeImage(inputPath, outputPath) {
    try {
        await sharp(inputPath)
            .resize(1200, 1200, { // Max dimensions
                fit: 'inside',
                withoutEnlargement: true
            })
            .jpeg({ quality: 80 }) // Convert to JPEG with 80% quality
            .toFile(outputPath);
        
        console.log(`Optimized: ${path.basename(inputPath)}`);
    } catch (error) {
        console.error(`Error optimizing ${inputPath}:`, error);
    }
}

async function processDirectory(directory) {
    const files = fs.readdirSync(directory);
    
    for (const file of files) {
        const inputPath = path.join(directory, file);
        const stat = fs.statSync(inputPath);
        
        if (stat.isDirectory()) {
            await processDirectory(inputPath);
        } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
            const outputPath = path.join(outputDir, file.replace(/\.(jpg|jpeg|png)$/i, '.jpg'));
            await optimizeImage(inputPath, outputPath);
        }
    }
}

console.log('Starting image optimization...');
processDirectory(assetsDir)
    .then(() => console.log('Image optimization complete!'))
    .catch(error => console.error('Error during optimization:', error)); 