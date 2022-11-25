export default function plunck  (array: {[key:string]: string|number}[] , property: string) : any[]{
    return array.map(item => item[property])
}