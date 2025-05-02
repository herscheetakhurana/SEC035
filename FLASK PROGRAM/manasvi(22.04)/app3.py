from flask import Flask, jsonify, render_template, request

app = Flask(__name__)

votes = {'cats': 0, 'dogs': 0}

@app.route('/')
def index():
    return render_template('star.html')  # no quotes around file path

@app.route('/vote', methods=['POST'])
def vote():
    data = request.get_json()
    choice = data.get('vote')
    if choice in votes:
        votes[choice] += 1
    return jsonify(votes)

@app.route('/results', methods=['GET'])
def results():
    return jsonify(votes)

if __name__ == '__main__':
    app.run(debug=True)
