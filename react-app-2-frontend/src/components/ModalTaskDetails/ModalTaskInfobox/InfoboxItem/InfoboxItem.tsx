import { IconName } from "@fortawesome/fontawesome-svg-core"

type InfoboxItemProps = {
   icon?: IconName
   infoType: JSX.Element
}

export default function InfoboxItem({ icon, infoType }: InfoboxItemProps) {
   return (
      <div className="flex justify-between items-center">
         <div className="flex gap-2 items-center">
            {icon && <i className={`fa fa-${icon}`}></i>}
            <span>{infoType}</span>
         </div>
      </div>
   )
}
