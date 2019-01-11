<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel {


    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        Commands\ReputationPosts::class,
        Commands\ScrapRun::class,
    ];


    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule) {
        // Scrap feeds for new content every 2 hours

        $schedule->command('scrap:run')
            ->cron('0 */2 * * *')
            ->withoutOverlapping();

        // Update posts reputation every 3 hours

        $schedule->command('reputation:posts')
            ->cron('35 */3 * * *')
            ->withoutOverlapping();
    }


    /**
     * Register the Closure based commands for the application.
     *
     * @return void
     */
    protected function commands() {
        require base_path('routes/console.php');
    }

}
