from flask import Flask, jsonify, render_template_string

app = Flask(__name__)
counter = {'count': 0}  # global counter

@app.route('/')
def index():
    with open("templates/logic.html") as f:
        return render_template_string(f.read())

@app.route('/count', methods=['POST'])
def count():
    counter['count'] += 1
    return jsonify({'count': counter['count']})

if __name__ == '__main__':
    app.run(debug=True)
