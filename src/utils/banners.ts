import online_alimentos_d from '../assets/banners/desktop/online_alimentos.webp';
import online_combo_d from '../assets/banners/desktop/online_combo.webp';
import online_esportes_d from '../assets/banners/desktop/online_esportes.webp';
import online_leitura_d from '../assets/banners/desktop/online_leitura.webp';
import online_music_d from '../assets/banners/desktop/online_music.webp';
import online_video01_d from '../assets/banners/desktop/online_video01.webp';
import online_video02_d from '../assets/banners/desktop/online_video02.webp';

import online_alimentos_m from '../assets/banners/mobile/online_alimentos.webp';
import online_combo_m from '../assets/banners/mobile/online_combo.webp';
import online_esportes_m from '../assets/banners/mobile/online_esportes.webp';
import online_leitura_m from '../assets/banners/mobile/online_leitura.webp';
import online_music_m from '../assets/banners/mobile/online_music.webp';
import online_video01_m from '../assets/banners/mobile/online_video01.webp';
import online_video02_m from '../assets/banners/mobile/online_video02.webp';

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
    online_combo_d
  ]
};

const mobile_banner: BannerPack = {
  banners: [
    online_alimentos_m,
    online_video01_m,
    online_esportes_m,
    online_music_m,
    online_leitura_m,
    online_video02_m,
    online_combo_m
  ]
};

export { desktop_banner, mobile_banner };
