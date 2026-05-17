import os
import glob
from PIL import Image

base_dir = r"c:\Users\Lotte\Documents\yderskov-nextjs\yderskov\public\images"
folders = [f for f in os.listdir(base_dir) if "vevej" in f]
if not folders:
    print("Folder not found")
    exit(1)

folder = folders[0]
folder_path = os.path.join(base_dir, folder)

# The current files we want to rotate
files_to_rotate = [
    ("IMG_9379_r.jpeg", "IMG_9379_r2.jpeg"),
    ("IMG_9384_r.jpeg", "IMG_9384_r2.jpeg")
]

for src_name, dst_name in files_to_rotate:
    src_p = os.path.join(folder_path, src_name)
    dst_p = os.path.join(folder_path, dst_name)
    if os.path.exists(src_p):
        print(f"Rotating {src_p} counter-clockwise")
        img = Image.open(src_p)
        # 90 degrees counter-clockwise
        img_rotated = img.rotate(90, expand=True)
        img_rotated.save(dst_p)
        print(f"Saved {dst_p}")
    else:
        print(f"File not found: {src_p}")
