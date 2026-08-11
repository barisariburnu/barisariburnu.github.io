# Değişiklik Günlüğü

## [2026-08-11]

### Eklendi

- AdMob yayıncı doğrulaması için alan adı kökünde yayımlanacak
  `public/app-ads.txt` kaydı eklendi.
- Proje çalışma kuralları için `AGENTS.md` ve değişiklik takibi için bu günlük
  oluşturuldu.

### Doğrulama

- `bun install --frozen-lockfile` başarıyla tamamlandı.
- `bun run build` başarıyla tamamlandı; statik export 9 sayfayı üretti.
- `out/app-ads.txt` dosyasının doğru yayıncı kaydını içerdiği doğrulandı.
- Push ve GitHub Pages dağıtımı sonrasında
  `https://barisariburnu.com.tr/app-ads.txt` adresinin `200 OK`,
  `text/plain; charset=utf-8` ve doğru AdMob yayıncı kaydıyla yanıt verdiği
  doğrulandı.
