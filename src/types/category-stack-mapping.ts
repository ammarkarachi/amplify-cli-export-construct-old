import { BucketDeployment } from '@aws-cdk/aws-s3-deployment';


export interface CategoryStackMapping {
  readonly category: string;
  readonly resourceName: string;
  readonly service: string;
};

export type CategoryStackMappingWithDeployment = CategoryStackMapping & {
  bucketDeployment? :BucketDeployment;
}