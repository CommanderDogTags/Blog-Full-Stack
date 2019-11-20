import { Query } from '../index';

const tagsForBlog = (id:string) => Query('CALL spBlogTags(?);', [id]);

export default {
    tagsForBlog
}