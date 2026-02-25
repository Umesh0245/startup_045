from PIL import Image

def crop_center_top():
    try:
        img_path = 'public/images/umesh-profile.png'
        img = Image.open(img_path)
        
        # Dimensions = 1024 x 1536
        # To zoom in on the face (top center), let's crop a 800x800 region
        
        width, height = img.size
        
        # We want to zoom in quite a bit, making it a "profile picture zoom"
        new_width = 800
        new_height = 800
        
        # Center horizontally
        left = (width - new_width) / 2
        right = left + new_width
        
        # Near the top, cut off 80px from top
        top = 80
        bottom = top + new_height
        
        img_cropped = img.crop((left, top, right, bottom))
        img_cropped.save('public/images/umesh-profile-zoomed.png')
        print("Image cropped successfully")
    except Exception as e:
        print("Error:", e)

crop_center_top()
