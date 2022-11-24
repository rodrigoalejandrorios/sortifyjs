export interface CreateSort <T> {
    data: T[];
    sortBy: keyof T;
    orderBy: 'ASC' | 'DESC'
}


export interface FindById <T> {
    data: T[];
    hashKey: keyof T;
    hashValue: string | number | symbol
}