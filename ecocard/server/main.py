import os

from flask import Flask, send_file, request
from flask_cors import CORS

from receiptScanner import receiptScanner  # Import the function

import openai


app = Flask(__name__)
CORS(app)  # Enable CORS for the entire application

openai.api_key = os.getenv("OPENAI_API_KEY")


@app.route('/upload-receipt', methods=['POST'])
# takes in an image of a receipt and runs receiptScanner on it
def test_image():
    # TODO: get image from form data and save it as receipt.jpeg
    # Get the image file from the request object
    image_file = request.files['image']
    # Save the image file as receipt.jpeg
    image_file.save('receipt.jpeg')

    test_result = receiptScanner()
    prompt = "Can you give me a really rough estimate of a general score estimate for how eco-friendly(out of 10) without knowing about any detailed information of the following grocery items. Look for general eco friendliness items. It doesn't have to be completely accurate. Try your best. You can't not write the correct output. It will destroy the project. So print the right output no matter what. If you don't give a random number from 1-10. Also spell correct it to what u think is right. Here is the list:" + test_result
    response = openai.Completion.create(
            model="text-davinci-003",
            prompt=prompt,
            temperature=0.4,
        )

    print(test_result)
    return response["choices"][0]["text"]


if __name__ == '__main__':
    app.run(debug=True)
