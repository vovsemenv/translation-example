import { useTranslation } from "react-i18next";
import translation from "./trans.tr";

export const OtherComponent = () => {
  const { t } = useTranslation(translation.ns);
  return <div>
        OtherComponent:&nbsp;{t(translation["otherCompText"])}
    </div>;
};
