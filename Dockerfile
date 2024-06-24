# Gunakan image Node.js versi 18
FROM node:18

# Buat direktori kerja untuk aplikasi Anda
WORKDIR /app

# Salin file package.json dan package-lock.json ke direktori kerja
COPY package*.json ./

# Install dependensi
RUN npm install

# Salin sisa kode aplikasi Anda ke direktori kerja
COPY . .

# Build aplikasi
RUN npm run build

# Expose port yang digunakan oleh aplikasi
EXPOSE 3000

# Jalankan aplikasi
CMD ["npm", "start"]
