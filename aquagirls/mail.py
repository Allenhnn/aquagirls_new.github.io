from flask import Flask, request,render_template
from flask_mail import Mail, Message
import requests

app = Flask(__name__)

# 配置郵件服務器和其他相關參數
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'allenhuang95710@gmail.com'
app.config['MAIL_PASSWORD'] = 'qxgdslsyfzvwqgkq'

mail = Mail(app)

# 個人聊天室：veUR67kNrMO9X34WumLR6IUZcD6duQ1fyZBo7IGMhkd
# 群組：Gj2d2hIHE935UnwnbL7vgdZzboKG4ZDYSnCf1cefygz
tkn= 'Gj2d2hIHE935UnwnbL7vgdZzboKG4ZDYSnCf1cefygz'
msg2= "有新訊息！"

@app.route('/submit', methods=['POST'])
def submit():
    name = request.form.get('name')
    email = request.form.get('email')
    content = request.form.get('content')
    # 在這裡可以進一步處理和驗證輸入數據
    content2=f'\n{content}'
    send_email(name, email,content)
    lineNotifyMessage(tkn,content2)
   # return render_template('contact.html')
    return render_template('return.html')

# Email
def send_email(name, email,content):
    msg = Message('水水姑娘|體驗中心 有一則新的回覆', sender=email, recipients=['allenhuang95710@gmail.com'])
    msg.body = f'寄件者: {name}\nEmail: {email}\n內容：\n{content}'
    mail.send(msg)

# line notify
def lineNotifyMessage(token, msg):
    headers = {
        "Authorization": "Bearer " + token,
        "Content-Type": "application/x-www-form-urlencoded"
    }

    payload = {'message': msg}
    r = requests.post("https://notify-api.line.me/api/notify",
                      headers=headers, params=payload)
    return r.status_code

if __name__ == '__main__':
    app.run()
