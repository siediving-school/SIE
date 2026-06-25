#!/bin/bash
# Script para descargar las imágenes generadas por IA
# Ejecutar desde la raíz del proyecto: bash descargar-imagenes-ia.sh

DEST="public/images"

echo "📥 Descargando imágenes generadas por IA..."

curl -L -o "$DEST/isla-fuerte-coral.jpg" \
  "https://pikaso.cdnpk.net/private/production/4708283439/render.jpg?token=exp=1782777600~hmac=fd7fa78508b3fa8d882d23ce1d95340c2439cfd577dee2d309f0f8017e572a23"
echo "✅ isla-fuerte-coral.jpg"

curl -L -o "$DEST/isla-fuerte-perfil-certificarse.jpg" \
  "https://pikaso.cdnpk.net/private/production/4708296842/render.jpg?token=exp=1782777600~hmac=3d7ce102d606ac40d465e27e766b840e3542474befd0bb8293fee05030000e07"
echo "✅ isla-fuerte-perfil-certificarse.jpg"

curl -L -o "$DEST/isla-fuerte-perfil-desconectarse.jpg" \
  "https://pikaso.cdnpk.net/private/production/4708297101/render.jpg?token=exp=1782777600~hmac=a04b18df387b3b5c3f5c3e8eabce6c1e6fd6055661bbc35c38a58149ff889891"
echo "✅ isla-fuerte-perfil-desconectarse.jpg"

curl -L -o "$DEST/isla-fuerte-perfil-avanzado.jpg" \
  "https://pikaso.cdnpk.net/private/production/4708297958/render.jpg?token=exp=1782777600~hmac=465abb1dd714f6297403db3f66163a2a33488a28aaceced953bac777f60628ac"
echo "✅ isla-fuerte-perfil-avanzado.jpg"

curl -L -o "$DEST/avatar-mariana.jpg" \
  "https://pikaso.cdnpk.net/private/production/4708300079/render.jpg?token=exp=1782777600~hmac=459ffbd34fdbbcb87b87d99996ba724efe2233edca9a34e7e2d1075c3e6eaf9a"
echo "✅ avatar-mariana.jpg"

curl -L -o "$DEST/avatar-tomas.jpg" \
  "https://pikaso.cdnpk.net/private/production/4708300310/render.jpg?token=exp=1782777600~hmac=fa647881e6e3de77773918c1526ca1d79d78432d4bb357f785371b8d50e239e7"
echo "✅ avatar-tomas.jpg"

curl -L -o "$DEST/avatar-sophie.jpg" \
  "https://pikaso.cdnpk.net/private/production/4708300895/render.jpg?token=exp=1782777600~hmac=0320522c4f923d8369fd5c15b21da71835bd743ee809ecdd7fa5c835b7e4927b"
echo "✅ avatar-sophie.jpg"

echo ""
echo "🎉 Listo. 7 imágenes descargadas en public/images/"
