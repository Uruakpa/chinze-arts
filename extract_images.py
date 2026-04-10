import os
import fitz  # PyMuPDF
from pathlib import Path

pdf_dir = r"c:\Users\USER\Desktop\chinze-arts-exhibition-website\public\ext"
images_dir = r"c:\Users\USER\Desktop\chinze-arts-exhibition-website\public\images"

# Create images directory if it doesn't exist
os.makedirs(images_dir, exist_ok=True)

# Extract from PDF.pdf (pages 6-27, 29) for Echoes of Solitude
print("Extracting from PDF.pdf (Echoes of Solitude)...")
pdf_path = os.path.join(pdf_dir, "PDF.pdf")
try:
    doc = fitz.open(pdf_path)
    pages_to_extract = list(range(5, 27)) + [28]  # 0-indexed: pages 6-27, 29
    
    echoes_count = 0
    for idx, page_num in enumerate(pages_to_extract):
        if page_num < len(doc):
            page = doc[page_num]
            pix = page.get_pixmap(matrix=fitz.Matrix(2, 2))  # 2x zoom for better quality
            img_path = os.path.join(images_dir, f"echoes-solitude-{idx+1:02d}.png")
            pix.save(img_path)
            echoes_count += 1
            print(f"  Saved: echoes-solitude-{idx+1:02d}.png (page {page_num+1})")
    doc.close()
    print(f"✓ Echoes of Solitude: {echoes_count} images extracted")
except Exception as e:
    print(f"Error extracting PDF.pdf: {e}")

# Extract from brochure.pdf (pages 9-43) for Whispers From Ancient Trees
print("\nExtracting from brochure.pdf (Whispers From Ancient Trees)...")
brochure_path = os.path.join(pdf_dir, "brochure.pdf")
try:
    doc = fitz.open(brochure_path)
    pages_to_extract = list(range(8, 43))  # 0-indexed: pages 9-43
    
    whispers_count = 0
    for idx, page_num in enumerate(pages_to_extract):
        if page_num < len(doc):
            page = doc[page_num]
            pix = page.get_pixmap(matrix=fitz.Matrix(2, 2))  # 2x zoom for better quality
            img_path = os.path.join(images_dir, f"whispers-trees-{idx+1:02d}.png")
            pix.save(img_path)
            whispers_count += 1
            print(f"  Saved: whispers-trees-{idx+1:02d}.png (page {page_num+1})")
    doc.close()
    print(f"✓ Whispers From Ancient Trees: {whispers_count} images extracted")
except Exception as e:
    print(f"Error extracting brochure.pdf: {e}")

print("\n✓ Image extraction complete!")

