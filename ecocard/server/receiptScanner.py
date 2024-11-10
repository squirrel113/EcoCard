import pytesseract
from PIL import Image
from textblob import TextBlob
import re
import cv2



def receiptScanner():
    image_path = 'receipt.jpeg'
    img = cv2.imread(image_path)

    text = pytesseract.image_to_string(img)

    lines = text.split('\n')
    item_pattern = r'\b[A-Z][A-Z0-9&\'\s]+[A-Z0-9]\b'

    food_items = []

    excluded_patterns = ['XXXX', 'O7511', 'CA \d', 'VISA', 'AUTH CODE',
                        'RETURN CREDIT', 'PROMOTIONAL DISCOUNT', 'NOTICE', 'CUENTENOS EN ESPANOL']
    for line in lines:
        match = re.search(item_pattern, line)
        if match:
            food_item = match.group().strip()
            food_items.append(food_item)

    non_food_items = ["Transaction #", "Date:", "Cher:", "Register #",
                    "Sub Total", "Total", "Credit Card Tendered", "Card:", "Change Due"]
    food_items = [item for item in food_items if all(keyword not in item for keyword in non_food_items) and all(
        not re.search(pattern, item) for pattern in excluded_patterns)]

    subtotal_index = None
    for i, item in enumerate(food_items):
        if "SUBTOTAL" in item:
            subtotal_index = i
            break
    if subtotal_index is not None:
        food_items = food_items[:subtotal_index]

    corrected_food_items = []
    for item in food_items:
        corrected_item = str(TextBlob(item).correct())
        corrected_food_items.append(corrected_item)

    food_items = corrected_food_items

    completedString = ""

    for item in food_items:
        completedString += item + "\n"
        print(item)

    return completedString

print(receiptScanner())