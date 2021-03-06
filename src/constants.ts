export const Constants = {
  AMPLIFY_CATEGORY_MAPPING_FILE: 'category-stack-mapping.json',
  AMPLIFY_BUILDS: 'amplify-builds',
  STACK_PARAMETERS: {
    FUNCTION: {
      DEPLOYMENT_BUCKET_NAME: 'deploymentBucketName',
      S3_KEY: 's3Key',
    },
    API: {
      DEPLOYMENT_BUCKET_NAME: 'S3DeploymentBucket',
      DEPLOYMENT_ROOT_KEY: 'S3DeploymentRootKey',
      PARAM_ZIP_PATH: 'ParamZipPath',
    },
  },
  PARAMETERS_DEPLOYMENT_BUCKET_NAME: 'DeploymentBucketName',
  PARAMTERS_AUTH_VERIFICATION_BUCKET_NAME: 'verificationBucketName',
  AMPLIFY_EXPORT_MANIFEST_FILE: 'amplify-export-manifest.json',
  AMPLIFY_EXPORT_TAG_FILE: 'export-tags.json',
  CATEGORIES: 'categories',
  S3_BUCKET: 's3Bucket',
  AMPLIFY_CFN_TEMPLATES: 'amplify-cfn-templates',
  EXPOSED_CONTAINER: 'exposedContainer',
  PARAMETERS_JSON_FILE: 'parameters.json',
  CFN_TEMPLATE_GLOB_PATTERN: '*template*.+(yaml|yml|json)',
  PROVIDER_METADATA: 'providerMetadata',
  NETWORK_STACK_S3_URL: 'NetworkStackS3Url',
  NETWORK_STACK_FILENAME: 'networkingStackTemplate.json',
  NETWORK_STACK_LOGICAL_ID: 'NetworkStack',
  API_GATEWAY_AUTH_URL: 'APIGatewayAuthURL',
  AUTH_TRIGGER_TEMPLATE_FILE: 'auth-trigger-cloudformation-template.json',
  AUTH_TRIGGER_TEMPLATE_URL: 'AuthTriggerTemplateURL',
  AUTH_TRIGGER_STACK: 'AuthTriggerCustomLambdaStack',
  APIGW_AUTH_STACK_LOGICAL_ID: 'APIGatewayAuthStack',
  APIGW_AUTH_STACK_FILE_NAME: 'APIGatewayAuthStack.json',
  AWS_CLOUDFORMATION_STACK_TYPE: 'AWS::CloudFormation::Stack',
  EXPORT_DEPLOYMENT_BUCKET_NAME: 'exportDeploymentBucket',
  AMPLIFY_AUXILIARY_LAMBDAS: 'amplify-auxiliary-files',
  APPSYNC_BUILD_FOLDER: 'build',
  APPSYNC_STACK_FOLDER: 'stacks',
  AUTH_ASSETS: 'assets',
  AMPLIFY_AUTH_ASSETS: 'amplify-auth-assets',
  AMPLIFY_APPSYNC_FILES: 'amplify-appsync-files',
  API_CATEGORY: {
    NAME: 'api',
    SERVICE: {
      APP_SYNC: 'AppSync',
      ELASTIC_CONTAINER: 'ElasticContainer',
      API_GATEWAY: 'API Gateway',
    },
  },
  HOSTING_CATEGORY: {
    NAME: 'hosting',
    SERVICE: {
      ELASTIC_CONTAINER: 'ElasticContainer',
    },
  },
  FUNCTION_CATEGORY: {
    NAME: 'function',
    SERVICE: {
      LAMBDA_FUNCTION: 'Lambda',
      LAMBDA_LAYER: 'LambdaLayer',
    },
  },
  AUTH_CATEGORY: {
    NAME: 'auth',
    SERVICE: {
      COGNITO: 'Cognito',
    },
  },
};
