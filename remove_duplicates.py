#!/usr/bin/env python3
"""
Remove duplicate gallery items from App.tsx
"""

with open("src/App.tsx", "r") as f:
    lines = f.readlines()

# Find the lines to remove
# The duplicate section starts around line 814 (after echoes-detail-2)
# and goes to line 1395 (after the duplicate whispers-trees-35)

# Strategy: Find the first occurrence of "// Extracted from Echoes" after line 708,
# and remove everything from that line through to the next "]; but keep the first ]; after whispers-trees-35

# First, find where the first set of extracted items ends (after the correct whispers-trees-35)
first_whispers_35_end = None
second_extracted_start = None

for i, line in enumerate(lines):
    if i > 700 and '// Extracted from Echoes of Solitude PDF' in line and first_whispers_35_end is None:
        first_whispers_35_end = i - 2  # Go back to find the end of the valid section
        second_extracted_start = i
        break

if first_whispers_35_end is not None:
    # Find the end of duplication (the next ];)
    duplicate_end = None
    for i in range(second_extracted_start, len(lines)):
        if lines[i].strip() == '];' and i > 1300:
            duplicate_end = i
            break
    
    if duplicate_end is not None:
        # Remove the duplicate section
        new_lines = lines[:second_extracted_start] + lines[duplicate_end:]
        
        with open("src/App.tsx", "w") as f:
            f.writelines(new_lines)
        
        print(f"Removed {duplicate_end - second_extracted_start} lines of duplicate items")
        print(f"Removed from line {second_extracted_start + 1} to line {duplicate_end + 1}")
    else:
        print("Could not find the end marker")
else:
    print("Could not find the duplicate section start")
