# Build stage
FROM maven:3.8.3-openjdk-17-slim AS build
WORKDIR /app
COPY pom.xml .
RUN mvn verify --fail-never
COPY src ./src
RUN mvn package

# Run stage
FROM openjdk:17-jdk-slim
WORKDIR /app
COPY --from=build /app/target/*.jar ./app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]
    