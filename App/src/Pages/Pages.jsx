import { getVersesTextByPage } from "quran-db";

const defaultSecondSettings = {
    verseEndSymbol: 1,
    surahSeperator: 1,
    customSurahSeperator: 1,
  };

const page = getVersesTextByPage(2, defaultSecondSettings);

export default page;
