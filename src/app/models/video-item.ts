export interface VideoItemInterface {
    channelId: string,
    channelTitle: string,
    description: string,
    liveBroadcastContent: string,
    thumbnails: Object,
    title: string,
    videoId: string,
    publishedAt: string
}



export class VideoItem implements VideoItemInterface {
    channelId: string;
    channelTitle: string;
    description: string;
    liveBroadcastContent: string;
    thumbnails: Object;
    title: string;
    videoId: string;
    publishedAt: string;
    constructor(params: VideoItemInterface) {
        this.channelId = params.channelId;
        this.channelTitle = params.channelTitle;
        this.description = params.description;
        this.liveBroadcastContent = params.liveBroadcastContent;
        this.thumbnails = params.thumbnails;
        this.title = params.title;
        this.videoId = params.videoId;
        this.publishedAt = params.publishedAt;
    }
}