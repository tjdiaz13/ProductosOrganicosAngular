export interface datas{
    id: string; 
    username: string; 
    first_name: string; 
    last_name: string; 
}

export interface Auth{
    token: string; 
    data: Array<datas>;
 }

 
 