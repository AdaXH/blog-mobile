import { HitokotoModel } from './hitokoto';

export async function getHitokto(): Promise<HitokotoModel> {
  return new Promise((reolve) => {
    fetch('https://v1.hitokoto.cn/')
      .then((d) => d.json())
      .then((d) => reolve(d));
  });
}
