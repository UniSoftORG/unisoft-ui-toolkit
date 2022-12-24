export interface IForumCategories {
    id?: string;
    image?: string;
    url_link?: string;
    title: string;
    short_description?: string | undefined;
    long_description?: string | undefined;
    stats?: IForumCategoryStats;
    categories?: IForumCategories[];
    sub_categories?: IForumCategories[];
    slug: string;
    is_locked?: boolean;
}

export interface IForumCategoryStats {
    threads: number;
    posts: number;
    last_post: any;
}

export interface IForumState {
    forumData: IForumCategories[] | undefined;
    isForumLoading: boolean;
    isAddTopicModalOpen: boolean;
    topicTitleError: string | undefined;
    topicContentError: string | undefined;
    topicTitle: string | undefined;
    topicContent: string | undefined;
    topicCategory: string | undefined;
    topicCategoryError: string | undefined;
    htmlTopicContent: string | undefined; //perhaps not needed. I intend to store the formatted HTML here, so w e can display EZ.
}

export interface IForumThreadPayload {
    title: string;
    description: string;
    category: string;
}
