#! /bin/bash -e

export DOCKER_REGISTRY=639347700193.dkr.ecr.ap-southeast-2.amazonaws.com/consumer-experience
export BASE_IMAGE=${DOCKER_REGISTRY}/saved-properties-ui
export LATEST_TAG=${BASE_IMAGE}:latest
export NUMBERED_TAG=${BASE_IMAGE}:${BUILDKITE_BUILD_NUMBER}
export MFE_NAME=saved-properties-ui
