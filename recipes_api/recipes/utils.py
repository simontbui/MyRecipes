import base64

def get_img_base64(file_path):
    with open(file_path, "rb") as image:
        base64_string = base64.b64encode(image.read())

    return base64_string.decode("utf-8")