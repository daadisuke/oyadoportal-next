/**
 *
 * サイト全体のパスを管理します
 * @see {@link https://github.com/koyablue/path-kanri | GitHub}
 *
 * import { getPath } from '@/libs/pathManager'
 *
 */

import pathManager from 'path-kanri';

// name: '/path/{parameterName1}/{parameterName2}'
const { getPath } = pathManager({
  dashboard: '/', //ダッシュボード（ホーム）
  column: '/column/', //コラム一覧
  seminar: '/seminar/', //セミナー一覧
  case: '/case/', //事例紹介一覧
  // example: '/example/{exampleId}/{slug}',
  // users: '/users',
  // userProfile: '/users/{userId}',
  // userPosts: '/users/{userId}/posts',
  // userPost: '/users/{userId}/posts/{postId}',
});

export { getPath };
