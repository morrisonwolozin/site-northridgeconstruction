#!/bin/bash
# rename-portfolio.sh
# Run from the project root: bash rename-portfolio.sh
# Renames portfolio-x.jpg hero images and portfolio-details-x-y.jpg
# detail images to descriptive names matching projects.js
#
# DRY RUN first — review output, then remove the 'echo' prefix from mv lines

# DIR="assets/img/portfolio"
DIR="."

rename_hero() {
  local old="$DIR/portfolio-$1.jpg"
  local new="$DIR/$2-hero.jpg"
  [ -f "$old" ] && mv "$old" "$new" && echo "  $old → $new" || echo "  SKIP (not found): $old"
}

rename_detail() {clear
  local x=$1
  local y=$2
  local stem=$3
  local old="$DIR/portfolio-details-${x}-${y}.jpg"
  local new="$DIR/${stem}-$(printf '%02d' $y).jpg"
  [ -f "$old" ] && mv "$old" "$new" && echo "  $old → $new" || echo "  SKIP (not found): $old"
}



echo ""
echo "=== Renaming detail images ==="

# Project 1 — Renovation & Addition, Liberty
for y in $(seq 1 10); do rename_detail 1 $y "renovation-addition-liberty"; done

# Project 2 — Modern Cottage, Northport
for y in $(seq 1 10); do rename_detail 2 $y "modern-cottage-northport"; done

# Project 3 — Modern Colonial, Lincolnville
for y in $(seq 1 10); do rename_detail 3 $y "modern-colonial-lincolnville"; done

# Project 4 — Modern Barn, Palermo
for y in $(seq 1 10); do rename_detail 4 $y "modern-barn-palermo"; done

# Project 5 — Modern Bungalow with ADU, Lincolnville
for y in $(seq 1 10); do rename_detail 5 $y "modern-bungalow-adu-lincolnville"; done

# Project 6 — Sauna, Camden
for y in $(seq 1 10); do rename_detail 6 $y "sauna-camden"; done

# Project 7 skipped

# Project 8 — Modern Barn, Somerville
for y in $(seq 1 10); do rename_detail 8 $y "modern-barn-somerville"; done

# Project 9 — Modern Bungalow with ADU, Lincolnville (2nd)
for y in $(seq 1 10); do rename_detail 9 $y "modern-bungalow-adu-lincolnville-2"; done

# Project 10 — Greek Revival, Belfast
for y in $(seq 1 10); do rename_detail 10 $y "greek-revival-belfast"; done

# Project 11 — Modern Bungalow, Lincolnville
for y in $(seq 1 10); do rename_detail 11 $y "modern-bungalow-lincolnville"; done

# Project 12 — Modern Colonial, Liberty
for y in $(seq 1 10); do rename_detail 12 $y "modern-colonial-liberty"; done

echo ""
echo "Done. Update projects.js gallery arrays to match actual file counts."