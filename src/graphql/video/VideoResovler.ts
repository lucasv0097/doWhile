import { Resolver, Query, InputType, Field, Mutation, Arg } from 'type-graphql'
import VideoSchema from '../../models/VideoSchema'
import Video from './Video'

@InputType()
class VideoInput {
  @Field()
  description: string

  @Field()
  name: string

  @Field()
  category: string
}

@Resolver(Video)
class VideoResovler {
  @Query(() => [Video])
  async videos() {
    const videos = await VideoSchema.find()
    return videos
  }
  @Mutation(() => Video)
  async createVideos(@Arg('videoInput') videoInput: VideoInput) {
    const video = await VideoSchema.create(videoInput)
    return video
  }
}
export default VideoResovler
