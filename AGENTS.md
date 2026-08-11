# Agent Rehberi

## Proje amacı

`barisariburnu.com.tr` ve `barisariburnu.github.io` üzerinde yayımlanan kişisel
portföy sitesini güvenli, erişilebilir ve statik dışa aktarıma uygun tutmak.

## Geliştirme ilkeleri

- Site Next.js statik export ve GitHub Pages ile yayımlanır.
- Alan adı kökünde yayımlanması gereken sabit dosyalar `public/` altında tutulur.
- Mevcut tasarım ve kullanıcı değişiklikleri korunur; ilgisiz dosyalar değiştirilmez.
- Her anlamlı işlem aynı oturumda `CHANGELOG.md` dosyasına kaydedilir.
- Değişiklikler push edilmeden önce en azından production build ile doğrulanır.

## Teslim kontrol listesi

1. `bun run build` başarıyla tamamlanır.
2. Beklenen statik dosyalar `out/` altında doğrulanır.
3. `git diff --check` temizdir.
4. `CHANGELOG.md` günceldir.

