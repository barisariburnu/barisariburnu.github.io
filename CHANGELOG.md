# Değişiklik Günlüğü

## [2026-08-31]

### Değiştirildi

- KUVVET gizlilik politikası ve hizmet şartları, 1.1 sürümündeki yalnızca uygun ücretsiz
  yüzeylerde gösterilen onay kontrollü Google Mobile Ads banner'ları, UMP gizlilik seçimleri,
  reklamsız Pro, isteğe bağlı yönetilen bulut ve cihazda hesaplanan gelişmiş içgörülerle uyumlu
  hale getirildi.
- Satın alma belirtecinin doğrulama hizmetinde tek yönlü sahiplik özetinin yanında kimliği
  doğrulanmış şifrelemeyle saklandığı ve hesap silmede kaldırıldığı açıklandı.

### Doğrulama

- Tüm KUVVET yasal sayfalarının statik export çıktısında üretildiği production build ile
  doğrulanacaktır.

## [2026-08-28]

### Eklendi

- GitHub Pages dağıtımı, KUVVET'in openGym tarafından kullanılan sabit medya revizyonundaki
  1.324 JPG ve 1.324 GIF'i build sırasında indirip
  `/projects/kuvvet-app/jpg/` ve `/projects/kuvvet-app/gif/` altında yayımlayacak biçimde
  genişletildi. Lisanslı ham medya Git deposunun geçmişine eklenmedi.

### Doğrulama

- Workflow, dağıtımdan önce her klasörde tam 1.324 dosya bulunduğunu ve örnek bench-press
  dosyalarının gerçek JPEG/GIF olduğunu doğrular.

## [2026-08-27]

### Eklendi

- KUVVET Google Play yayını için İngilizce gizlilik politikası, hizmet şartları,
  ödeme yardımı, hesap silme ve AGPL kaynak teklifi sayfaları eklendi.
- Yasal sayfalar için mobil uyumlu ortak stil eklendi.
- Next.js yapılandırması GitHub Pages aracının tanıdığı JavaScript biçimine geçirildi; KUVVET'in
  uygulama içi yasal bağlantılarıyla aynı olan sonu `/` ile biten URL'ler kalıcı hâle getirildi.
- Uzun KUVVET yasal sayfalarının editör alanında dikey ortalanarak üst bölümünün kırpılması
  engellendi; sayfalar artık en üstten başlıyor ve tamamı kaydırılabiliyor.

### Doğrulama

- Production statik export ile tüm yeni sayfaların üretildiği doğrulandı.

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
