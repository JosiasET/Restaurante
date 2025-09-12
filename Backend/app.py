from flask import Flask # type: ignore
import os
from dotenv import load_dotenv # type: ignore

# Cargar variables de entorno
load_dotenv()

app = Flask(__name__)

# Configuración desde .env
app.config['MYSQL_HOST'] = os.getenv('MYSQL_HOST')
app.config['MYSQL_USER'] = os.getenv('MYSQL_USER')
app.config['MYSQL_PASSWORD'] = os.getenv('MYSQL_PASSWORD')
app.config['MYSQL_DB'] = os.getenv('MYSQL_DB')
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')

@app.route('/')
def hello():
    return "¡Flask está funcionando! Conexión a MySQL configurada."

@app.route('/test-db')
def test_db():
    try:
        import pymysql
        connection = pymysql.connect(
            host=app.config['MYSQL_HOST'],
            user=app.config['MYSQL_USER'],
            password=app.config['MYSQL_PASSWORD'],
            database=app.config['MYSQL_DB']
        )
        return "✅ Conexión a MySQL exitosa!"
    except Exception as e:
        return f"❌ Error de conexión: {str(e)}"

if __name__ == '__main__':
    app.run(debug=True, port=5000, host='0.0.0.0')