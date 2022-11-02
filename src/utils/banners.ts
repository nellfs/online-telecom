import online_alimentos_d from "../assets/banners/desktop/online_alimentos.png";
import online_combo_d from "../assets/banners/desktop/online_combo.png";
import online_esportes_d from "../assets/banners/desktop/online_esportes.png";
import online_leitura_d from "../assets/banners/desktop/online_leitura.png";
import online_music_d from "../assets/banners/desktop/online_music.png";
import online_video01_d from "../assets/banners/desktop/online_video01.png";
import online_video02_d from "../assets/banners/desktop/online_video02.png";

import online_alimentos_m from "../assets/banners/mobile/online_alimentos.png";
import online_combo_m from "../assets/banners/mobile/online_combo.png";
import online_esportes_m from "../assets/banners/mobile/online_esportes.png";
import online_leitura_m from "../assets/banners/mobile/online_leitura.png";
import online_music_m from "../assets/banners/mobile/online_music.png";
import online_video01_m from "../assets/banners/mobile/online_video01.png";
import online_video02_m from "../assets/banners/mobile/online_video02.png";

interface BannerPack {
  banners: [
    banner_alimentos: string,
    banner_video01: string,
    banner_esportes: string,
    banner_music: string,
    online_leitura: string,
    online_video02: string,
    online_combo: string
  ];
}

const desktop_banner: BannerPack = {
  banners: [
    online_alimentos_d,
    online_video01_d,
    online_esportes_d,
    online_music_d,
    online_leitura_d,
    online_video02_d,
    online_combo_d,
  ],
};

const mobile_banner: BannerPack = {
  banners: [
    online_alimentos_m,
    online_video01_m,
    online_esportes_m,
    online_music_m,
    online_leitura_m,
    online_video02_m,
    online_combo_m,
  ],
};

export { desktop_banner, mobile_banner };
