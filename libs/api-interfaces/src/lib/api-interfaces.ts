export interface Message
{
  message: string;
}

export interface BaseEntity
{
  id: string | number | null;
}

export interface Item extends BaseEntity
{
  title: string;
  description: string;
}
