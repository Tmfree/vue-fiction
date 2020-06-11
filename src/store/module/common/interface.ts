export interface base {
    lunboList?: Array<any>
    hotFictionList?: Array<any>
    freeFictionList?: Array<any>
    newFictionList?: Array<any>
    qingFictionList?: Array<any>
    searchList?: Array<any>
    navBar?: navBar
    searchKW?: string
}

export interface navBar {
    showTitle: boolean
    showLeftTitle: boolean
    leftTitle: string
}