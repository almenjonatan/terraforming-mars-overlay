FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build

WORKDIR /src

COPY Frontend.csproj Frontend.csproj
RUN dotnet restore "Frontend.csproj"

COPY . .

FROM build AS publish

RUN curl -sL https://deb.nodesource.com/setup_15.x | bash -
RUN apt-get install -y nodejs

RUN dotnet publish -c Release -o /app/publish

FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS final

EXPOSE 80

WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Frontend.dll"]
