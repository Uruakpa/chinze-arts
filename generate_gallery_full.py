import os

images_dir = r"c:\Users\USER\Desktop\chinze-arts-exhibition-website\public\images"

# Get all extracted images
echoes_images = sorted([f for f in os.listdir(images_dir) if f.startswith("echoes-solitude")])
whispers_images = sorted([f for f in os.listdir(images_dir) if f.startswith("whispers-trees")])

gallery_items = []

# Add echoes items
for idx, img in enumerate(echoes_images, 1):
    img_name = img.replace(".png", "")
    gallery_items.append(f'''  {{
    id: "{img_name}",
    title: "Echoes of Solitude - {idx}",
    year: "2023",
    medium: "Archival Print from PDF Documentation",
    description: "From the Echoes of Solitude exhibition documentation, capturing the layered narratives of female resilience and persistence.",
    image: "/images/{img}",
    section: "echoes",
  }},''')

# Add whispers items
for idx, img in enumerate(whispers_images, 1):
    img_name = img.replace(".png", "")
    gallery_items.append(f'''  {{
    id: "{img_name}",
    title: "Whispers From Ancient Trees - {idx}",
    year: "2024",
    medium: "Archival Print from Brochure Documentation",
    description: "From the Whispers From Ancient Trees exhibition, documenting the traditional Igbo wooden sleeping mat exploration and its cultural significance.",
    image: "/images/{img}",
    section: "whispers",
  }},''')

# Write to file
with open("gallery_items_full.tsx", "w") as f:
    f.write("\n".join(gallery_items))

print(f"Generated {len(gallery_items)} gallery items")
print(f"Echoes of Solitude: {len(echoes_images)} items")
print(f"Whispers From Ancient Trees: {len(whispers_images)} items")
