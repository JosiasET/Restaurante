# Usa la imagen oficial de Python
FROM python:3.9

# Establece el directorio de trabajo
WORKDIR /app

# Copia el archivo de requisitos primero (para aprovechar la cache de Docker)
COPY requirements.txt .

# Instala las dependencias de Python
RUN pip install --no-cache-dir -r requirements.txt

# Copia todo el código de la aplicación
COPY . .

# Expone el puerto 5000 (que es donde corre Flask)
EXPOSE 5000

# Comando para ejecutar la aplicación
CMD ["python", "app.py"]