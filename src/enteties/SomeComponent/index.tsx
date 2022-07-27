import { useTranslation } from "react-i18next";
import translation from "./trans.tr"

export const SomeComponent = () => {
    const { t } = useTranslation(translation.ns);
    return <div>
        SomeСomp: { t(translation.attachment) }
    </div>
}
