# Create an certificate
You need to create an certificate to start your server!
Download OpenSSL and execute this commands:
On Linux:
```bash
openssl genrsa -out key.pem
openssl req -new -key key.pem -out csr.pem
openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
rm csr.pem
```
On Windows:
```batch
openssl genrsa -out key.pem
openssl req -new -key key.pem -out csr.pem
openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
del /f csr.pem
del /f .rnd
```
Write all this in the config and replace newlines to \\n
