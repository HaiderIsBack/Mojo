const sharp = require('sharp');
const fs = require('fs-extra');
const path = require('path');

const inputDir = path.join(__dirname, '..', 'public', 'uploads');
const outputDir = path.join(__dirname, '..', 'public', 'compressed');

const convertImagesInDirectory = async () => {
    try {
      // Ensure the output directory exists
      await fs.ensureDir(outputDir);
  
      // Read all files from the input directory
      const files = await fs.readdir(inputDir);
  
      // Loop through each file and convert it to WebP
      for (const file of files) {
        const inputFilePath = path.join(inputDir, file);
        const outputFilePath = path.join(outputDir, file.replace(/\.[^/.]+$/, '.webp'));
  
        // Convert file only if it's an image (PNG, JPEG, etc.)
        if (/\.(png|jpg|jpeg)$/i.test(file)) {
          await convertImageToWebP(inputFilePath, outputFilePath);
        }
      }
      await fs.emptyDir(inputDir);
    } catch (error) {
      console.error('Error processing directory:', error);
    }
};
  

const convertImageToWebP = async (inputFile, outputFile) => {
    try {
      await sharp(inputFile)
        .webp({ quality: 80 }) // Adjust quality as needed
        .toFile(outputFile);
      console.log(`Converted: ${path.basename(inputFile)} to WebP.`);
    } catch (error) {
      console.error(`Error converting ${inputFile}:`, error);
    }
};

convertImagesInDirectory();