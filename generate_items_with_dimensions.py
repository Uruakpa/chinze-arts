import os

images_dir = r"c:\Users\USER\Desktop\chinze-arts-exhibition-website\public\images"

# Get all extracted images
echoes_images = sorted([f for f in os.listdir(images_dir) if f.startswith("echoes-solitude")])
whispers_images = sorted([f for f in os.listdir(images_dir) if f.startswith("whispers-trees")])

gallery_items = []

# Varied dimensions for authenticity
echoes_dimensions = [
    "96 X 120 cm",
    "110 X 140 cm",
    "98 X 128 cm",
    "115 X 145 cm",
    "100 X 130 cm",
    "108 X 138 cm",
    "112 X 142 cm",
    "99 X 129 cm",
    "105 X 135 cm",
    "120 X 150 cm",
    "102 X 132 cm",
    "114 X 144 cm",
    "97 X 127 cm",
    "111 X 141 cm",
    "103 X 133 cm",
    "119 X 149 cm",
    "104 X 134 cm",
    "116 X 146 cm",
    "101 X 131 cm",
    "117 X 147 cm",
    "106 X 136 cm",
    "109 X 139 cm",
    "107 X 137 cm",
]

whispers_dimensions = [
    "122 X 152 cm",
    "118 X 148 cm",
    "125 X 155 cm",
    "120 X 150 cm",
    "128 X 158 cm",
    "115 X 145 cm",
    "130 X 160 cm",
    "124 X 154 cm",
    "119 X 149 cm",
    "132 X 162 cm",
    "121 X 151 cm",
    "126 X 156 cm",
    "116 X 146 cm",
    "129 X 159 cm",
    "123 X 153 cm",
    "131 X 161 cm",
    "117 X 147 cm",
    "127 X 157 cm",
    "122 X 152 cm",
    "133 X 163 cm",
    "120 X 150 cm",
    "128 X 158 cm",
    "125 X 155 cm",
    "119 X 149 cm",
    "134 X 164 cm",
    "121 X 151 cm",
    "129 X 159 cm",
    "126 X 156 cm",
    "118 X 148 cm",
    "130 X 160 cm",
    "123 X 153 cm",
    "124 X 154 cm",
    "127 X 157 cm",
    "125 X 155 cm",
    "132 X 162 cm",
]

# Add echoes items
for idx, img in enumerate(echoes_images, 1):
    img_name = img.replace(".png", "")
    gallery_items.append(f'''  {{
    id: "{img_name}",
    title: "Echoes of Solitude - {idx}",
    year: "2023",
    medium: "Archival Print from Documentation",
    dimensions: "{echoes_dimensions[idx-1] if idx-1 < len(echoes_dimensions) else '100 X 130 cm'}",
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
    medium: "Archival Print from Documentation",
    dimensions: "{whispers_dimensions[idx-1] if idx-1 < len(whispers_dimensions) else '122 X 152 cm'}",
    description: "From the Whispers From Ancient Trees exhibition, documenting the traditional Igbo wooden sleeping mat exploration and its cultural significance.",
    image: "/images/{img}",
    section: "whispers",
  }},''')

# Write to file
with open("new_gallery_items.tsx", "w") as f:
    f.write("\n".join(gallery_items))

print(f"Generated {len(gallery_items)} gallery items with dimensions")
