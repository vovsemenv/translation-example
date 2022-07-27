import fs from "fs";
import {Plugin} from "vite"
export const translationPlugin = (): Plugin => {
  const fileRegex = /\.tr\.ts$/;

  return {
    name: "translation-plugin",
    transform(code, id) {
      if (fileRegex.test(id)) {
        const enTrans = JSON.parse(code.match(/"en": ({[^}]*})/)[1]);
        const ruTrans = JSON.parse(code.match(/"ru": ({[^}]*})/)[1]);

        const oldRu = JSON.parse(
          fs.readFileSync("translation-tokens-ru.json", "utf8")
        );
        fs.writeFileSync(
          "translation-tokens-ru.json",
          JSON.stringify({ 
            ...oldRu,
            [id]: ruTrans }),
          { encoding: "utf8" }
        );

        fs.writeFileSync(
          "translation-tokens-en.json",
          JSON.stringify({ 
            ...oldRu,
            [id]:enTrans}),
          { encoding: "utf8" }
        );

        return {
          code: `export default ${JSON.stringify({...enTrans,ns: id})}`,
          map: null,
        };
      }
    },
    buildStart() {
      fs.writeFileSync("translation-tokens-ru.json", "{}", { encoding: "utf8" });
      fs.writeFileSync("translation-tokens-en.json", "{}", { encoding: "utf8" });
    },
  };
};
