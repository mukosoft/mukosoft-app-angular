export interface NewsItem {
    id: number;
    name: string;
    content: string;
    name_i18n: { de: string };
    content_i18n: { de: string };
    created_at: Date;
    updated_at: Date;
}