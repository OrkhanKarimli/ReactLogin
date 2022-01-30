export const useCopy=()=>{
const Copy=(value)=>{
navigator.clipboard.writeText(value);

};
return[Copy]
}